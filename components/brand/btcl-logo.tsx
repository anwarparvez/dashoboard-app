export function BtclIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-label="BTCL"
    >
      <rect x="0" y="0" width="24" height="24" rx="6" />
      <path
        d="M6 12h12M12 6v12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
