const Product = ({names , price , unit}) => {
  return (
    <tr>
        <td className="flex items-center gap-3 py-3 font-bold"><div className="bg-[#ECF2FF] h-[40px] rounded-[5px] w-[40px]"></div>{names}</td>
        <td>{price}</td>
        <td>{unit}</td>
    </tr>
  )
}

export default Product