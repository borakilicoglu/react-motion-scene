import { useState } from 'react';
import Tabs from './components/tabs';
import Content from './components/content';

export function App() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex items-center h-screen">
      <main className="bg-white flex w-full h-full lg:h-[737px] items-between flex-col">
        <Content activeTab={activeTab} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  );
}
