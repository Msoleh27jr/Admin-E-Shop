const Resent = ({ names, date, price, paid }) => {
  return (
    <tr className="">
      <td className="py-2 font-bold">{names}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td className="px-3 w-[50px] rounded-2xl">{paid}</td>
    </tr>
  );
};

export default Resent;
