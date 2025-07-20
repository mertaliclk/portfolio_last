export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FolioForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
