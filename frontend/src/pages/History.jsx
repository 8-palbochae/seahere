import Period from "../components/history/Period";
import HistoryList from "../components/history/HistoryList";
const History = () => {
	return (
		<div className="flex flex-col gap-3 items-center ">
			<div className=" w-3/4">
				<Period />
			</div>
			
			<div>
				<HistoryList/>
			</div>
		</div>
	);
};

export default History;
