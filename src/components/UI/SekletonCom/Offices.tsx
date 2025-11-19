import clsx from "clsx";

function Office({
  name,
  children,
  invert = false,
}: {
  name: string;
  children: React.ReactNode;
  invert?: boolean;
}) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<"ul"> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Canada" invert={invert}>
          1 Carlsberg Gate
          <br />
          Ottawa, Canada
        </Office>
      </li>
      <li>
        <Office name="Middle East" invert={invert}>
          24 Lego Allé
          <br />
          Doha, Qatar
        </Office>
      </li>
      <li>
        <Office name="Europe" invert={invert}>
          24 Lego Allé
          <br />
          Istanbul, Turkey
        </Office>
      </li>
    </ul>
  );
}
