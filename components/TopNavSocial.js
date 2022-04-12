export default function TopNavSocial() {
  return (
    <div>
      <nav className="bg-white py-2 border-b-4 border-slate-200">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <span className="flex">
              <i className="bx bxs-envelope bx-sm" />
              <p className="mx-2 font-bold text-slate-500">
                support@iemlabs.com
              </p>
            </span>
            <span className="flex">
              <i className="bx bxs-phone bx-sm" />
              <p className="ml-2 font-bold text-slate-500">+91 XXXXX XXXXX</p>
            </span>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <div className="grid grid-cols-4">
              <a href="#" className="hover:cursor-pointer">
                <i className="bx bxl-facebook-circle bx-sm mr-4" />
              </a>
              <a href="#" className="hover:cursor-pointer">
                <i className="bx bxl-twitter bx-sm" />
              </a>
              <a href="#" className="hover:cursor-pointer">
                <i className="bx bxl-instagram bx-sm" />
              </a>
              <a href="#" className="hover:cursor-pointer">
                <i className="bx bxl-linkedin-square bx-sm" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
