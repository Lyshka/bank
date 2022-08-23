import {features} from "../constants"
import styles from "../styles"

const FeatureCard = ({icon, title, content, index}) => (
	<div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
		<div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
			<img
				src={icon}
				alt="icon"
				className="w-1/2 h-1/2 object-contain"
			/>
		</div>


		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-white text-lg leading-[23px] mb-1">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-base leading-[24px] mb-1">
				{content}
			</p>
		</div>
	</div>
)
export default FeatureCard