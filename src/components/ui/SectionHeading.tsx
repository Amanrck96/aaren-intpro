import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            "text-sm font-medium tracking-[0.2em] uppercase mb-4",
            light ? "text-gold" : "text-gold-dark"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight",
          light ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-0.5 bg-gold mt-6 line-grow",
          align === "center" && "mx-auto"
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed",
            light ? "text-white/80" : "text-charcoal/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
