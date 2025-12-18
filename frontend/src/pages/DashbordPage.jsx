import { useState } from "react";
import UpperNavbar from "./Dashbord/upperNavbar";
import LeftNavbar from "./Dashbord/leftNavbar";
import Searchbar from "./Dashbord/Searchbar";
import ShowAnalyze from "./Dashbord/showanalyze";
import ManageAccountCard from "./Dashbord/manageacoountcard";

function DashboardPage() {
  const [showManageAccount, setShowManageAccount] = useState(false);

  return (
    <>
      <UpperNavbar />

      <div className="bg-black h-[calc(100vh-4rem)]">

        {/* Fixed Left Sidebar */}
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-20">
          <LeftNavbar onManageAccount={() => setShowManageAccount(true)} />
        </div>

        {/* Main Content */}
        <main
          className="
            ml-64
            h-[calc(100vh-4rem)]
            overflow-hidden
            relative
          "
        >
          {/* Background Glow */}
          <div className="absolute -top-40 -left-40 h-96 w-96 bg-green-500/20 blur-[140px]" />
          <div className="absolute top-1/2 -right-40 h-96 w-96 bg-green-500/10 blur-[160px]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-10 space-y-10">

            <section className="w-full">
              <Searchbar />
            </section>

            <section className="w-full">
              <ShowAnalyze />
            </section>

          </div>
        </main>
      </div>

      {/* Manage Account Modal */}
      {showManageAccount && (
        <ManageAccountCard onClose={() => setShowManageAccount(false)} />
      )}
    </>
  );
}

export default DashboardPage;
