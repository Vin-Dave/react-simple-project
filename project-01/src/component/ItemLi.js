const ItemLi = ({ data }) => {
	return (
		<ul>
			{data.map((element) => (
				<li key={element.text}>
					<h2>{element.author}</h2>
					<span>{element.text}</span>
				</li>
			))}
		</ul>
	);
};
export default ItemLi;
