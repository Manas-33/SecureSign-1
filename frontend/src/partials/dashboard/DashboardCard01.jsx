import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import Select from '../../images/tick.png';
import Reject from '../../images/reject.png'
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Select} width="32" height="32" alt="Icon 01" />
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Download 
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">
                Report
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">
                Delete
              </Link>
            </li>
          </EditMenu>
        </header>
        <div className="text-xs font-semibold text-green-400 dark:text-green-500 uppercase mb-1">Accepted</div>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Official Certificate</h2>
        <div className="flex items-start mb-4">
          <div className="text-2xl  text-slate-800 dark:text-slate-100 mr-2">Official certificate of passing a Qualifying Examination</div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </button>
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        {/* <LineChart data={chartData} width={389} height={128} /> */}
      </div>
    </div>
  );
}

export default DashboardCard01;
