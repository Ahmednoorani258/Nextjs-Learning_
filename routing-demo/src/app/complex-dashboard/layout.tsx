export default function DashboardLayout({
  children,
  revenue,
  notifications,
  analytics,
  login,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  analytics: React.ReactNode;
  login: React.ReactNode;
}) {
  //conditional routing
   
  const isLoggedin = false
  return isLoggedin? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col"> 
          <div>{revenue}</div>
          <div>{analytics}</div>
        </div>
          <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ):(
    login
  );
}
