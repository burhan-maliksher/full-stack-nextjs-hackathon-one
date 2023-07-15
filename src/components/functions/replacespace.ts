// replace all spaces with dash

export default function ReplaceSpaceWithDash(productName: string): string {
  const originalString = productName;
  const convertedString = originalString.replace(/\s+/g, "-");
  return convertedString;
}
