"use client";

import Link from "next/link";
import { TELEGRAM_URL } from "../config";

interface TelegramButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  showIcon?: boolean;
}

export default function TelegramButton({
  variant = "primary",
  className = "",
  size = "md",
  label = "JOIN TELEGRAM NOW",
  showIcon = true,
}: TelegramButtonProps) {
  const sizeClasses = {
    sm: "py-2.5 px-5 text-xs",
    md: "py-3.5 px-7 text-sm",
    lg: "py-4 px-10 text-base",
  };

  return (
    <a
      href={TELEGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <span className="relative z-10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.04 9.603c-.152.667-.556.831-1.126.517l-3.108-2.29-1.5 1.44c-.165.166-.306.306-.627.306l.224-3.17 5.779-5.223c.251-.223-.054-.347-.389-.124L7.44 14.6l-3.047-.952c-.662-.207-.675-.662.138-.979l11.901-4.59c.551-.2 1.034.134.13.169z"/>
          </svg>
        </span>
      )}
      <span className="relative z-10">{label}</span>
    </a>
  );
}
