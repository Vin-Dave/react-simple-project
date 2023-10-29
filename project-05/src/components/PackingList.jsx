export default function PackingList({ data }) {
	return (
		<div className='list '>
			<ul>
				{data.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
}
function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}
