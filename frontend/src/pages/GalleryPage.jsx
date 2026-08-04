import PageShell from "../components/PageShell";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <PageShell
        title="Gallery"
        description="Photos, videos, events, and testimonials."
      />
    </div>
  );
}
