import { Input } from "./ui/input";

export default function ProfileSeting() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <div className="h-36 bg-cover bg-center bg-gray-300" />
          <div className="absolute -bottom-10 left-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="w-20 h-20 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="px-6 pt-14 pb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">Thomas Holmes <span className="text-blue-500">✔</span></h2>
              <p className="text-sm text-gray-500">heythomas@gmail.com · NewYork - United States</p>
              <div className="flex gap-2 text-xs text-gray-600 mt-2">
                <span className="bg-gray-100 px-2 py-0.5 rounded">Admin</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 px-4 py-1 rounded">Statistics</button>
              <button className="bg-gray-100 px-4 py-1 rounded">Sign out</button>
            </div>
          </div>

          <div className="flex border-b border-gray-200 mb-4 space-x-4">
            {['Profile', 'Security', 'Experience', 'About', 'Settings'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 text-sm font-medium border-b-2 ${tab === 'Profile' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <Input type="text" value={'Thomas'} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 invisible">Last Name</label>
                <Input type="text" value={'Holmes'} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input type="email" value={'heythomas@gmail.com'} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <Input type="text" value={'@Heythomas'} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-gray-700">Marketing Emails</span>
                </label>
                <p className="text-xs text-gray-400 ml-6">Get updates and offers.</p>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-gray-700">Data Sharing</span>
                </label>
                <p className="text-xs text-gray-400 ml-6">Allow third-party access.</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button type="button" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Discard</button>
              <button type="submit" className="bg-black text-white px-4 py-2 rounded">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
