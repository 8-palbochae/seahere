import Period from "../components/history/Period";
import HistoryList from "../components/history/HistoryList";
const History = () => {
	return (
		<div className="flex flex-col gap-3 items-center ">
			<div className=" w-full">
				<Period />
			</div>
			
			<HistoryList/>
		</div>
	);
};

export default History;
