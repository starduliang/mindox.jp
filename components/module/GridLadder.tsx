const GridLadder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid md:grid-cols-3 gap-10 [&>*:nth-child(3n-1)]:mt-[96px] [&>*:nth-child(3n)]:mt-[192px]">
      {children}
    </div>
  )
}

export default GridLadder
