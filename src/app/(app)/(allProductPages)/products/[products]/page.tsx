function ReplaceDashWithSpace(productName:string):string{
  const DashedString = productName;
  const convertedString = DashedString.replace(/-/g, " ");
  return convertedString
}

export default function Product({ params }: {
    params: { products: string },
  })  {
    
    const ProductName=ReplaceDashWithSpace(params.products)
    
return (
    <div>
      <h1>{ProductName}</h1>
      <h1>hello hi burhan</h1>
    </div>
  )
}
