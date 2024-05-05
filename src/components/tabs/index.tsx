import { tabs } from '@/utils/data';
import Tab from './Tab';

function Tabs({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="flex w-full divide-x overflow-x-scroll">
      {tabs.map(({ title, icon }, index) => (
        <div
          className={`flex lg:w-1/5 min-w-[301px] h-[124px] justify-center items-center cursor-pointer space-x-4 transition duration-300 ease-in ${
            activeTab === index ? 'bg-[#f9fbff]' : 'bg-white'
          }`}
          key={index}
        >
          <Tab
            index={index}
            title={title}
            icon={icon}
            setActiveTab={setActiveTab}
            isActive={activeTab === index}
          />
        </div>
      ))}
    </div>
  );
}

export default Tabs;
