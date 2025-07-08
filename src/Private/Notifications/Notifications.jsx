import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookmark, faCalendarAlt, faBullseye, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Pages/Footer/Footer';

const Notifications = () => {
  return (
    <div className="container ml-[100px] p-6 pt-[150px] w-[800px]">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p className="text-gray-600 mt-1">Manage how LibraDream notifies you</p>
      
      <div className="mt-4">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <FontAwesomeIcon icon={faBell} className="text-xl" />
            <div className="ml-3">
              <strong className="block">New Book Alerts</strong>
              <p className="text-sm text-gray-600">Get notified when new books are added to your favorite genres.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border-b bg-blue-50">
          <div>
            <FontAwesomeIcon icon={faBookmark} className="text-xl" />
            <div className="ml-3">
              <strong className="block">Bookmark Sync</strong>
              <p className="text-sm text-gray-600">Get notified when your are synced across devices.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"/>
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" />
            <div className="ml-3">
              <strong className="block">Weekly Reading Reminder</strong>
              <p className="text-sm text-gray-600">Receive a weekly reminder to encourage your reading goals.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border-b bg-blue-50">
          <div>
            <FontAwesomeIcon icon={faBullseye} className="text-xl" />
            <div className="ml-3">
              <strong className="block">Reading Goals</strong>
              <p className="text-sm text-gray-600">Track your reading progress and achievement notifications.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"/>
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED]peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <FontAwesomeIcon icon={faStar} className="text-xl" />
            <div className="ml-3">
              <strong className="block">App Updates</strong>
              <p className="text-sm text-gray-600">Get updates on new features and improvements to the app.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <FontAwesomeIcon icon={faUsers} className="text-xl" />
            <div className="ml-3">
              <strong className="block">Community Activity</strong>
              <p className="text-sm text-gray-600">Updates on book clubs and community discussions.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-8 bg-[#00000040] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 border border-[#5352ED] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#5352ED]"></div>
          </label>
        </div>

        <div className="p-4 bg-blue-50 mt-4">
          <p className="text-blue-700">Notification delivery</p>
          <p className="text-sm text-blue-600">Notification will be delivered based on your device settings. You can change preferences in your device settings.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;