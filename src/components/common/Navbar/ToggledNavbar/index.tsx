import { useTypedSelector } from "@Store/hooks";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import NavDropDownMenu from "../NavDropdownMenu";
import { setToggleNavbar } from "@Store/actions/common";
import Icon from "@Components/common/Icon";

interface IToggledNavbarProps {
  navItems: Record<string, any>;
  mobileViewNavRef: any;
}

const ToggledNavbar = ({ navItems, mobileViewNavRef }: IToggledNavbarProps) => {
  const dispatch = useDispatch();
  const toggleNavbar = useTypedSelector((state) => state.common.navbarToggled);

  // toggle menu items
  const handleToggle = () => {
    if (toggleNavbar) {
      document.body.style.overflow = "auto";
      mobileViewNavRef?.current?.classList?.remove("nav-open");
    } else {
      document.body.style.overflow = "hidden";
      mobileViewNavRef?.current?.classList?.add("nav-open");
    }
    dispatch(setToggleNavbar(!toggleNavbar));
  };

  return (
    <div className="mobile-view-navbar">
      <button type="button" onClick={handleToggle} className="md:naxatw-hidden">
        {toggleNavbar ? (
          <div className="close-btn naxatw-mt-2 naxatw-flex naxatw-cursor-pointer naxatw-items-center">
            <Icon name="close" className="naxatw-text-white naxatw-text-2xl" />
          </div>
        ) : (
          <div className="naxatw-flex naxatw-mt-2 naxatw-cursor-pointer naxatw-items-center">
            <Icon name="menu" className="naxatw-text-white naxatw-text-2xl" />
          </div>
        )}
      </button>

      {toggleNavbar && (
        <nav
          className="primary-navigation naxatw-fixed naxatw-z-50 naxatw-inset-x-0 naxatw-bottom-0 naxatw-top-[70px] naxatw-z-[99] naxatw-block naxatw-bg-[#FBF8F3] md:naxatw-hidden"
          ref={mobileViewNavRef}
        >
          <div className="naxatw-flex naxatw-h-full naxatw-flex-col">
            <div className="naxatw-flex naxatw-flex-1 naxatw-flex-col naxatw-px-4 naxatw-pt-5">
              {navItems?.map((nav: Record<string, any>) => {
                return nav?.children ? (
                  <NavDropDownMenu subLinks={nav} key={nav.id} />
                ) : (
                  <NavLink
                    to={nav.path}
                    key={nav.path}
                    onClick={() => dispatch(setToggleNavbar(false))}
                  >
                    <p className="naxatw-border-b naxatw-border-solid naxatw-border-b-[#D9D9D9] naxatw-py-3 naxatw-text-2xl naxatw-font-medium naxatw-capitalize">
                      {nav.label}
                    </p>
                  </NavLink>
                );
              })}
            </div>
            <p className="naxatw-border-t naxatw-border-solid naxatw-border-t-[#EDEDED] naxatw-py-6 naxatw-text-center naxatw-text-base naxatw-leading-[1.575rem] naxatw-tracking-[-0.00563rem] naxatw-text-[#000]">
              © IMAP {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default ToggledNavbar;
