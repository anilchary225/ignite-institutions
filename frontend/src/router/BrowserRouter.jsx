import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const BrowserRouteContext = createContext(null);
const RouteMatchContext = createContext({ params: {} });

function normalizePath(pathname) {
  if (!pathname || pathname === "") return "/";
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

function splitPath(pathname) {
  return normalizePath(pathname).split("/").filter(Boolean);
}

function matchPath(pattern, pathname) {
  const patternParts = splitPath(pattern);
  const pathParts = splitPath(pathname);

  if (patternParts.length !== pathParts.length) return null;

  const params = {};
  for (let index = 0; index < patternParts.length; index += 1) {
    const patternPart = patternParts[index];
    const pathPart = pathParts[index];
    if (patternPart.startsWith(":")) {
      params[patternPart.slice(1)] = pathPart;
      continue;
    }
    if (patternPart !== pathPart) return null;
  }

  return params;
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() =>
    typeof window === "undefined" ? "/" : normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(() => {
    const navigate = (nextPath, options = {}) => {
      const normalized = normalizePath(nextPath);
      if (options.replace) {
        window.history.replaceState({}, "", normalized);
      } else {
        window.history.pushState({}, "", normalized);
      }
      setPathname(normalized);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return { pathname, navigate };
  }, [pathname]);

  return (
    <BrowserRouteContext.Provider value={value}>
      {children}
    </BrowserRouteContext.Provider>
  );
}

export function useBrowserRoute() {
  const context = useContext(BrowserRouteContext);
  if (!context) throw new Error("useBrowserRoute must be used within BrowserRouter");
  return context;
}

export function useLocation() {
  const { pathname } = useBrowserRoute();
  return { pathname };
}

export function useNavigate() {
  return useBrowserRoute().navigate;
}

export function useParams() {
  return useContext(RouteMatchContext).params;
}

export function RouteLink({ to, children, className, onClick, ...props }) {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Navigate({ to, replace = false }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, replace, to]);

  return null;
}

export function Route({ path, element }) {
  return null;
}

export function Routes({ children }) {
  const { pathname } = useLocation();
  let fallback = null;

  for (const child of children) {
    if (!child || typeof child !== "object") continue;
    if (child.props?.path === "*") {
      fallback = child;
      continue;
    }
    const params = matchPath(child.props.path, pathname);
    if (params) {
      return (
        <RouteMatchContext.Provider value={{ params }}>
          {child.props.element}
        </RouteMatchContext.Provider>
      );
    }
  }

  return fallback ? fallback.props.element : null;
}
