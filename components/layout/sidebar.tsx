"use client";

export function Sidebar({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 z-50 w-64 bg-background border-r p-4
          top-16 h-[calc(100vh-4rem)]
          transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <nav className="space-y-2 text-sm">
          <NavItem label="Dashboard" />
          <NavItem label="IGW" />
          <NavItem label="ICX" />
          <NavItem label="Domain" />
          <NavItem label="PSTN + GPON" />
          <NavItem label="VPN" />
          <NavItem label="LLI" />
          <NavItem label="Transmission" />
          <NavItem label="Tower Sharing" />
          <NavItem label="NIX" />
        </nav>
      </aside>
    </>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <div className="px-3 py-2 rounded-lg cursor-pointer hover:bg-muted">
      {label}
    </div>
  );
}
