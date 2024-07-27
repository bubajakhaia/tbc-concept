import "./Navstatus.css"
import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from './BreadCrumbs'; // Adjust path as needed

// Import breadcrumb arrays
import {
  breadcrumbsHome,
  breadcrumbsProductsOverview,
  breadcrumbsProductsKits,
  breadcrumbsPersonalBanker,
  breadcrumbsLifestyleOverview,
  breadcrumbsLifestyleOffers,
  breadcrumbsLifestyleEvents,
  breadcrumbsConceptSpaceOverview,
  breadcrumbsConceptCafe,
  breadcrumbsConceptLibrary,
  breadcrumbsConceptBranches,
  breadcrumbsHomeB,
  breadcrumbsProductsOverviewB,
  breadcrumbsProductsKitsB,
  breadcrumbsPersonalBankerB,
  breadcrumbsLifestyleOverviewB,
  breadcrumbsLifestyleOffersB,
  breadcrumbsLifestyleEventsB,
  breadcrumbsConceptSpaceOverviewB,
  breadcrumbsConceptCafeB,
  breadcrumbsConceptLibraryB,
  breadcrumbsConceptBranchesB
} from '../data/breadcrumbsData'; // Adjust path as needed

const NavStatus = () => {
  const location = useLocation();
  const path = location.pathname;

  let breadcrumbs;

  // Determine which breadcrumbs to use based on the current path
  switch (path) {
    case '/ge':
      breadcrumbs = breadcrumbsHome;
      break;
    case '/':
      breadcrumbs = breadcrumbsHome;
      break;
    case '/eng':
      breadcrumbs = breadcrumbsHomeB;
      break;
    case '/ge/products/overview':
      breadcrumbs = breadcrumbsProductsOverview;
      break;
    case '/eng/products/overview':
      breadcrumbs = breadcrumbsProductsOverviewB;
      break;
    case '/ge/products/kits':
      breadcrumbs = breadcrumbsProductsKits;
      break;
    case '/eng/products/kits':
      breadcrumbs = breadcrumbsProductsKitsB;
      break;
    case '/ge/products/personalbanker':
      breadcrumbs = breadcrumbsPersonalBanker;
      break;
    case '/eng/products/personalbanker':
      breadcrumbs = breadcrumbsPersonalBankerB;
      break;
    case '/ge/lifestyle/overview':
      breadcrumbs = breadcrumbsLifestyleOverview;
      break;
    case '/eng/lifestyle/overview':
      breadcrumbs = breadcrumbsLifestyleOverviewB;
      break;
    case '/ge/lifestyle/offers':
      breadcrumbs = breadcrumbsLifestyleOffers;
      break;
    case '/eng/lifestyle/offers':
      breadcrumbs = breadcrumbsLifestyleOffersB;
      break;
    case '/ge/lifestyle/events':
      breadcrumbs = breadcrumbsLifestyleEvents;
      break;
    case '/eng/lifestyle/events':
      breadcrumbs = breadcrumbsLifestyleEventsB;
      break;
    case '/ge/concept-space/overview':
      breadcrumbs = breadcrumbsConceptSpaceOverview;
      break;
    case '/eng/concept-space/overview':
      breadcrumbs = breadcrumbsConceptSpaceOverviewB;
      break;
    case '/ge/concept-space/cafe':
      breadcrumbs = breadcrumbsConceptCafe;
      break;
    case '/eng/concept-space/cafe':
      breadcrumbs = breadcrumbsConceptCafeB;
      break;
    case '/ge/concept-space/library':
      breadcrumbs = breadcrumbsConceptLibrary;
      break;
    case '/eng/concept-space/library':
      breadcrumbs = breadcrumbsConceptLibraryB;
      break;
    case '/ge/concept-space/concept-branches':
      breadcrumbs = breadcrumbsConceptBranches;
      break;
    case '/eng/concept-space/concept-branches':
      breadcrumbs = breadcrumbsConceptBranchesB;
      break;
    default:
      breadcrumbs = [];
  }

  return (
    <div className="container breadcrumbs-container" >
      <Breadcrumbs items={breadcrumbs} />
    </div>
  );
};

export default NavStatus;