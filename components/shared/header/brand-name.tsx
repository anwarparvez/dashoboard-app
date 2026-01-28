import { APP_NAME } from "@/lib/constants";

export default function BrandName() {
  return (
    <div className="flex flex-col leading-none">
      {/* Line 1 */}
      <span className="text-sm font-extrabold tracking-wide text-primary">
        {APP_NAME}
      </span>

      {/* Line 2 */}
      <span className="text-xs font-semibold text-muted-foreground">
        #affordable
      </span>
    </div>
  );
}
