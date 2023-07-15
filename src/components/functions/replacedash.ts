// replaces all dashe with space

export default function ReplaceDashWithSpace(productName: string): string {
  const DashedString = productName;
  const convertedString = DashedString.replace(/-/g, " ");
  return convertedString;
}
