type LogoProps = {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
};

export default function Logo({ children, size }: LogoProps) {
  return <div className={size}>{children}</div>;
}
