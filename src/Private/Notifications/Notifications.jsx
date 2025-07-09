import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBell,
  faBookmark,
  faCalendarAlt,
  faBullseye,
  faStar,
  faUsers,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"
import Footer from "../../Pages/Footer/Footer"

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: "new-book-alerts",
      icon: faBell,
      title: "New Book Alerts",
      description: "Get notified when new books are added to your favorite genres.",
      enabled: false,
    },
    {
      id: "bookmark-sync",
      icon: faBookmark,
      title: "Bookmark Sync",
      description: "Get notified when your are synced across devices",
      enabled: true,
    },
    {
      id: "weekly-reading-reminder",
      icon: faCalendarAlt,
      title: "Weekly Reading Reminder",
      description: "Receive a weekly reminder to encourage your reading goals.",
      enabled: false,
    },
    {
      id: "reading-goals",
      icon: faBullseye,
      title: "Reading Goals",
      description: "Track your reading progress and achievement notifications",
      enabled: true,
    },
    {
      id: "app-updates",
      icon: faStar,
      title: "App Updates",
      description: "Get updates on new features and improvements to the app.",
      enabled: false,
    },
    {
      id: "community-activity",
      icon: faUsers,
      title: "Community Activity",
      description: "Updates on book clubs and community discussions.",
      enabled: false,
    },
  ])

  const handleToggle = (id) => {
    setNotifications((prev) => prev.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)))
  }

  return (
    <section>
    <div className="container ml-[100px] p-6 pt-[150px] w-[800px]" style={{ fontFamily: '"Gothic A1", sans-serif' }}>
      <h2 className="text-2xl font-bold">Notifications</h2>
      <p className="text-gray-600 mt-1">Manage how LibraDream notifies you</p>

      <div className="mt-8">
        {notifications.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center justify-between py-6 ${
              index !== notifications.length - 1 ? "" : ""
            }`}
          >
            <div className="flex items-start">
              <FontAwesomeIcon icon={item.icon} className="text-xl mt-1 mr-4" />
              <div>
                <strong className="block text-gray-900">{item.title}</strong>
                <p className="text-sm font-normal text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>

            <button
              onClick={() => handleToggle(item.id)}
              className={`relative inline-flex h-9 w-16 items-center rounded-md border-[1px] shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                item.enabled ? "bg-[#5352ED] border-[#5352ED]" : "bg-gray-200 border-[#5352ED] "
              }`}
            >
              <span
                className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform ${
                  item.enabled ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-blue-50 mt-8 rounded-lg">
        <div className="flex items-start">
          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mr-3 mt-0.5" />
          <div>
            <p className="text-blue-700 font-medium">Notification delivery</p>
            <p className="text-sm text-blue-600 mt-1">
              Notification will be delivered based on your device settings. You can change preferences in your device
              settings.
            </p>
          </div>
        </div>
      </div>
    </div>
     <Footer />
    </section>
  )
}

export default Notifications
