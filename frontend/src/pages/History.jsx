import Period from "../components/history/Period";
import HistoryList from "../components/history/HistoryList";
const History = () => {
	return (
		<div className="flex flex-col gap-3">
			<div>
				<Period />
			</div>
			
			<div>
				<HistoryList/>
			</div>
		</div>
	);
};

export default History;
