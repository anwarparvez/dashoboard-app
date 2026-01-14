export function Footer() {
  return (
    <footer className="h-12 border-t border-border bg-background flex items-center justify-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Bangladesh Telecommunications Company Limited
    </footer>
  );
}
