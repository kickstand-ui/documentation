/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IBreadcrumbs,
} from './scripts/components/breadcrumbs/breadcrumbs';

export namespace Components {
  interface CAccordion {}
  interface CAccordionSlide {
    'expanded': boolean;
    'heading': string;
    'toggleSlide': () => Promise<void>;
  }
  interface CAlert {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'header': string;
    'note': boolean;
  }
  interface CBadge {
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'hollow': boolean;
  }
  interface CBreadcrumbs {
    'breadcrumbs': IBreadcrumbs[];
  }
  interface CButton {
    'clear': boolean;
    'color': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'controls': string;
    'cssClass': string;
    'describedBy': string;
    'disabled': boolean;
    'expanded': boolean;
    'haspopup': boolean;
    'hideText': boolean;
    'hollow': boolean;
    'href': string;
    'icon': string;
    'iconDirection': 'left' | 'right';
    'loading': boolean;
    'size': 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    'type': 'button' | 'submit' | 'reset';
  }
  interface CCard {
    'alt': string;
    'clickable': boolean;
    'imgDirection': string;
    'imgSrc': string;
    'lazy': boolean;
    'threshold': number;
    'url': string;
  }
  interface CCarousel {
    'autoplay': boolean;
    'hideControls': boolean;
    'hideIndicators': boolean;
    'thumbnails': boolean;
    'timer': number;
  }
  interface CCarouselSlide {
    'align': 'start' | 'center' | 'end';
    'alt': string;
    'clickable': boolean;
    'lazy': boolean;
    'position': 'start' | 'center' | 'end';
    'src': string;
    'threshold': number;
    'url': string;
  }
  interface CColumn {
    'align': 'start' | 'center' | 'end';
  }
  interface CDropdown {
    'buttonColor': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'buttonIcon': string;
    'clearButton': boolean;
    'dropdownAlignment': 'left' | 'right';
    'dropdownText': string;
    'hideButtonText': boolean;
    'hollowButton': boolean;
    'megaMenu': boolean;
  }
  interface CFormField {
    'disabled': boolean;
    'errorMessage': string;
    'helpText': string;
    'invalid': boolean;
    'label': string;
    'placeholder': string;
    'required': boolean;
    'requiredText': string;
    'tooltipText': string;
    'type': 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden';
  }
  interface CImg {
    'alt': string;
    'cssClass': string;
    'lazy': boolean;
    'src': string;
    'threshold': number;
  }
  interface CLoading {
    'message': string;
    'showMessage': boolean;
    'type': 'spinner' | 'ellipsis';
  }
  interface CLoadingOverlay {
    'absolute': boolean;
    'hide': () => Promise<void>;
    'message': string;
    'show': () => Promise<void>;
    'showMessage': boolean;
    'size': 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  }
  interface CModal {
    'dismissible': boolean;
    'hide': () => Promise<void>;
    'modalTitle': string;
    'show': () => Promise<void>;
    'size': 'sm' | 'md' | 'lg';
    'titleId': string;
  }
  interface CModalFooter {}
  interface CNavbar {
    'altText': string;
    'collapseAt': string;
    'logoUrl': string;
    'tagline': string;
  }
  interface CNavbarGroup {
    'position': string;
  }
  interface CNavbarItem {
    'position': string;
  }
  interface CNavbarRow {}
  interface COverlay {
    'absolute': boolean;
    'dismissible': boolean;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
    'theme': 'dark' | 'light';
    'titleId': string;
  }
  interface CProgressBar {
    'description': string;
    'hideDescription': boolean;
    'hideProgressLabel': boolean;
    'progressLabel': string;
    'size': string;
    'type': 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'value': number;
  }
  interface CRow {
    'align': 'start' | 'center' | 'end';
    'noGutter': boolean;
  }
  interface CSideDrawer {
    'headerText': string;
    'hide': () => Promise<void>;
    'name': string;
    'position': 'left' | 'right';
    'show': () => Promise<void>;
    'size': 'sm' | 'md' | 'lg' | 'xl';
  }
  interface CSpinBox {
    'hideLabel': boolean;
    'label': string;
    'max': number;
    'min': number;
    'step': number;
    'value': number;
  }
  interface CTab {
    'controls': string;
  }
  interface CTabList {
    'content': boolean;
    'disable': boolean;
    'hideDecoration': boolean;
    'name': string;
    'position': string;
    'show': boolean;
    'size': string;
  }
  interface CTabPanel {
    'tabId': string;
  }
  interface CTabs {
    'position': string;
  }
  interface CTooltip {
    'disable': boolean;
    'hideDecoration': boolean;
    'position': 'top' | 'bottom' | 'left' | 'right';
    'show': boolean;
    'size': 'sm' | 'md' | 'lg' | 'xl';
    'text': string;
  }
  interface CardBody {
    'cardSubtitle': string;
    'cardTitle': string;
  }
  interface CardFooter {}
  interface DropdownItem {
    'closeOnClick': boolean;
  }
}

declare global {


  interface HTMLCAccordionElement extends Components.CAccordion, HTMLStencilElement {}
  var HTMLCAccordionElement: {
    prototype: HTMLCAccordionElement;
    new (): HTMLCAccordionElement;
  };

  interface HTMLCAccordionSlideElement extends Components.CAccordionSlide, HTMLStencilElement {}
  var HTMLCAccordionSlideElement: {
    prototype: HTMLCAccordionSlideElement;
    new (): HTMLCAccordionSlideElement;
  };

  interface HTMLCAlertElement extends Components.CAlert, HTMLStencilElement {}
  var HTMLCAlertElement: {
    prototype: HTMLCAlertElement;
    new (): HTMLCAlertElement;
  };

  interface HTMLCBadgeElement extends Components.CBadge, HTMLStencilElement {}
  var HTMLCBadgeElement: {
    prototype: HTMLCBadgeElement;
    new (): HTMLCBadgeElement;
  };

  interface HTMLCBreadcrumbsElement extends Components.CBreadcrumbs, HTMLStencilElement {}
  var HTMLCBreadcrumbsElement: {
    prototype: HTMLCBreadcrumbsElement;
    new (): HTMLCBreadcrumbsElement;
  };

  interface HTMLCButtonElement extends Components.CButton, HTMLStencilElement {}
  var HTMLCButtonElement: {
    prototype: HTMLCButtonElement;
    new (): HTMLCButtonElement;
  };

  interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {}
  var HTMLCCardElement: {
    prototype: HTMLCCardElement;
    new (): HTMLCCardElement;
  };

  interface HTMLCCarouselElement extends Components.CCarousel, HTMLStencilElement {}
  var HTMLCCarouselElement: {
    prototype: HTMLCCarouselElement;
    new (): HTMLCCarouselElement;
  };

  interface HTMLCCarouselSlideElement extends Components.CCarouselSlide, HTMLStencilElement {}
  var HTMLCCarouselSlideElement: {
    prototype: HTMLCCarouselSlideElement;
    new (): HTMLCCarouselSlideElement;
  };

  interface HTMLCColumnElement extends Components.CColumn, HTMLStencilElement {}
  var HTMLCColumnElement: {
    prototype: HTMLCColumnElement;
    new (): HTMLCColumnElement;
  };

  interface HTMLCDropdownElement extends Components.CDropdown, HTMLStencilElement {}
  var HTMLCDropdownElement: {
    prototype: HTMLCDropdownElement;
    new (): HTMLCDropdownElement;
  };

  interface HTMLCFormFieldElement extends Components.CFormField, HTMLStencilElement {}
  var HTMLCFormFieldElement: {
    prototype: HTMLCFormFieldElement;
    new (): HTMLCFormFieldElement;
  };

  interface HTMLCImgElement extends Components.CImg, HTMLStencilElement {}
  var HTMLCImgElement: {
    prototype: HTMLCImgElement;
    new (): HTMLCImgElement;
  };

  interface HTMLCLoadingElement extends Components.CLoading, HTMLStencilElement {}
  var HTMLCLoadingElement: {
    prototype: HTMLCLoadingElement;
    new (): HTMLCLoadingElement;
  };

  interface HTMLCLoadingOverlayElement extends Components.CLoadingOverlay, HTMLStencilElement {}
  var HTMLCLoadingOverlayElement: {
    prototype: HTMLCLoadingOverlayElement;
    new (): HTMLCLoadingOverlayElement;
  };

  interface HTMLCModalElement extends Components.CModal, HTMLStencilElement {}
  var HTMLCModalElement: {
    prototype: HTMLCModalElement;
    new (): HTMLCModalElement;
  };

  interface HTMLCModalFooterElement extends Components.CModalFooter, HTMLStencilElement {}
  var HTMLCModalFooterElement: {
    prototype: HTMLCModalFooterElement;
    new (): HTMLCModalFooterElement;
  };

  interface HTMLCNavbarElement extends Components.CNavbar, HTMLStencilElement {}
  var HTMLCNavbarElement: {
    prototype: HTMLCNavbarElement;
    new (): HTMLCNavbarElement;
  };

  interface HTMLCNavbarGroupElement extends Components.CNavbarGroup, HTMLStencilElement {}
  var HTMLCNavbarGroupElement: {
    prototype: HTMLCNavbarGroupElement;
    new (): HTMLCNavbarGroupElement;
  };

  interface HTMLCNavbarItemElement extends Components.CNavbarItem, HTMLStencilElement {}
  var HTMLCNavbarItemElement: {
    prototype: HTMLCNavbarItemElement;
    new (): HTMLCNavbarItemElement;
  };

  interface HTMLCNavbarRowElement extends Components.CNavbarRow, HTMLStencilElement {}
  var HTMLCNavbarRowElement: {
    prototype: HTMLCNavbarRowElement;
    new (): HTMLCNavbarRowElement;
  };

  interface HTMLCOverlayElement extends Components.COverlay, HTMLStencilElement {}
  var HTMLCOverlayElement: {
    prototype: HTMLCOverlayElement;
    new (): HTMLCOverlayElement;
  };

  interface HTMLCProgressBarElement extends Components.CProgressBar, HTMLStencilElement {}
  var HTMLCProgressBarElement: {
    prototype: HTMLCProgressBarElement;
    new (): HTMLCProgressBarElement;
  };

  interface HTMLCRowElement extends Components.CRow, HTMLStencilElement {}
  var HTMLCRowElement: {
    prototype: HTMLCRowElement;
    new (): HTMLCRowElement;
  };

  interface HTMLCSideDrawerElement extends Components.CSideDrawer, HTMLStencilElement {}
  var HTMLCSideDrawerElement: {
    prototype: HTMLCSideDrawerElement;
    new (): HTMLCSideDrawerElement;
  };

  interface HTMLCSpinBoxElement extends Components.CSpinBox, HTMLStencilElement {}
  var HTMLCSpinBoxElement: {
    prototype: HTMLCSpinBoxElement;
    new (): HTMLCSpinBoxElement;
  };

  interface HTMLCTabElement extends Components.CTab, HTMLStencilElement {}
  var HTMLCTabElement: {
    prototype: HTMLCTabElement;
    new (): HTMLCTabElement;
  };

  interface HTMLCTabListElement extends Components.CTabList, HTMLStencilElement {}
  var HTMLCTabListElement: {
    prototype: HTMLCTabListElement;
    new (): HTMLCTabListElement;
  };

  interface HTMLCTabPanelElement extends Components.CTabPanel, HTMLStencilElement {}
  var HTMLCTabPanelElement: {
    prototype: HTMLCTabPanelElement;
    new (): HTMLCTabPanelElement;
  };

  interface HTMLCTabsElement extends Components.CTabs, HTMLStencilElement {}
  var HTMLCTabsElement: {
    prototype: HTMLCTabsElement;
    new (): HTMLCTabsElement;
  };

  interface HTMLCTooltipElement extends Components.CTooltip, HTMLStencilElement {}
  var HTMLCTooltipElement: {
    prototype: HTMLCTooltipElement;
    new (): HTMLCTooltipElement;
  };

  interface HTMLCardBodyElement extends Components.CardBody, HTMLStencilElement {}
  var HTMLCardBodyElement: {
    prototype: HTMLCardBodyElement;
    new (): HTMLCardBodyElement;
  };

  interface HTMLCardFooterElement extends Components.CardFooter, HTMLStencilElement {}
  var HTMLCardFooterElement: {
    prototype: HTMLCardFooterElement;
    new (): HTMLCardFooterElement;
  };

  interface HTMLDropdownItemElement extends Components.DropdownItem, HTMLStencilElement {}
  var HTMLDropdownItemElement: {
    prototype: HTMLDropdownItemElement;
    new (): HTMLDropdownItemElement;
  };
  interface HTMLElementTagNameMap {
    'c-accordion': HTMLCAccordionElement;
    'c-accordion-slide': HTMLCAccordionSlideElement;
    'c-alert': HTMLCAlertElement;
    'c-badge': HTMLCBadgeElement;
    'c-breadcrumbs': HTMLCBreadcrumbsElement;
    'c-button': HTMLCButtonElement;
    'c-card': HTMLCCardElement;
    'c-carousel': HTMLCCarouselElement;
    'c-carousel-slide': HTMLCCarouselSlideElement;
    'c-column': HTMLCColumnElement;
    'c-dropdown': HTMLCDropdownElement;
    'c-form-field': HTMLCFormFieldElement;
    'c-img': HTMLCImgElement;
    'c-loading': HTMLCLoadingElement;
    'c-loading-overlay': HTMLCLoadingOverlayElement;
    'c-modal': HTMLCModalElement;
    'c-modal-footer': HTMLCModalFooterElement;
    'c-navbar': HTMLCNavbarElement;
    'c-navbar-group': HTMLCNavbarGroupElement;
    'c-navbar-item': HTMLCNavbarItemElement;
    'c-navbar-row': HTMLCNavbarRowElement;
    'c-overlay': HTMLCOverlayElement;
    'c-progress-bar': HTMLCProgressBarElement;
    'c-row': HTMLCRowElement;
    'c-side-drawer': HTMLCSideDrawerElement;
    'c-spin-box': HTMLCSpinBoxElement;
    'c-tab': HTMLCTabElement;
    'c-tab-list': HTMLCTabListElement;
    'c-tab-panel': HTMLCTabPanelElement;
    'c-tabs': HTMLCTabsElement;
    'c-tooltip': HTMLCTooltipElement;
    'card-body': HTMLCardBodyElement;
    'card-footer': HTMLCardFooterElement;
    'dropdown-item': HTMLDropdownItemElement;
  }
}

declare namespace LocalJSX {
  interface CAccordion {}
  interface CAccordionSlide {
    'expanded'?: boolean;
    'heading'?: string;
  }
  interface CAlert {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'header'?: string;
    'note'?: boolean;
  }
  interface CBadge {
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'hollow'?: boolean;
  }
  interface CBreadcrumbs {
    'breadcrumbs'?: IBreadcrumbs[];
  }
  interface CButton {
    'clear'?: boolean;
    'color'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'controls'?: string;
    'cssClass'?: string;
    'describedBy'?: string;
    'disabled'?: boolean;
    'expanded'?: boolean;
    'haspopup'?: boolean;
    'hideText'?: boolean;
    'hollow'?: boolean;
    'href'?: string;
    'icon'?: string;
    'iconDirection'?: 'left' | 'right';
    'loading'?: boolean;
    'size'?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    'type'?: 'button' | 'submit' | 'reset';
  }
  interface CCard {
    'alt'?: string;
    'clickable'?: boolean;
    'imgDirection'?: string;
    'imgSrc'?: string;
    'lazy'?: boolean;
    'threshold'?: number;
    'url'?: string;
  }
  interface CCarousel {
    'autoplay'?: boolean;
    'hideControls'?: boolean;
    'hideIndicators'?: boolean;
    'thumbnails'?: boolean;
    'timer'?: number;
  }
  interface CCarouselSlide {
    'align'?: 'start' | 'center' | 'end';
    'alt'?: string;
    'clickable'?: boolean;
    'lazy'?: boolean;
    'position'?: 'start' | 'center' | 'end';
    'src'?: string;
    'threshold'?: number;
    'url'?: string;
  }
  interface CColumn {
    'align'?: 'start' | 'center' | 'end';
  }
  interface CDropdown {
    'buttonColor'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'buttonIcon'?: string;
    'clearButton'?: boolean;
    'dropdownAlignment'?: 'left' | 'right';
    'dropdownText'?: string;
    'hideButtonText'?: boolean;
    'hollowButton'?: boolean;
    'megaMenu'?: boolean;
  }
  interface CFormField {
    'disabled'?: boolean;
    'errorMessage'?: string;
    'helpText'?: string;
    'invalid'?: boolean;
    'label'?: string;
    'placeholder'?: string;
    'required'?: boolean;
    'requiredText'?: string;
    'tooltipText'?: string;
    'type'?: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden';
  }
  interface CImg {
    'alt'?: string;
    'cssClass'?: string;
    'lazy'?: boolean;
    'src'?: string;
    'threshold'?: number;
  }
  interface CLoading {
    'message'?: string;
    'showMessage'?: boolean;
    'type'?: 'spinner' | 'ellipsis';
  }
  interface CLoadingOverlay {
    'absolute'?: boolean;
    'message'?: string;
    'showMessage'?: boolean;
    'size'?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  }
  interface CModal {
    'dismissible'?: boolean;
    'modalTitle'?: string;
    'size'?: 'sm' | 'md' | 'lg';
    'titleId'?: string;
  }
  interface CModalFooter {}
  interface CNavbar {
    'altText'?: string;
    'collapseAt'?: string;
    'logoUrl'?: string;
    'tagline'?: string;
  }
  interface CNavbarGroup {
    'position'?: string;
  }
  interface CNavbarItem {
    'position'?: string;
  }
  interface CNavbarRow {}
  interface COverlay {
    'absolute'?: boolean;
    'dismissible'?: boolean;
    'theme'?: 'dark' | 'light';
    'titleId'?: string;
  }
  interface CProgressBar {
    'description'?: string;
    'hideDescription'?: boolean;
    'hideProgressLabel'?: boolean;
    'progressLabel'?: string;
    'size'?: string;
    'type'?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
    'value'?: number;
  }
  interface CRow {
    'align'?: 'start' | 'center' | 'end';
    'noGutter'?: boolean;
  }
  interface CSideDrawer {
    'headerText'?: string;
    'name'?: string;
    'position'?: 'left' | 'right';
    'size'?: 'sm' | 'md' | 'lg' | 'xl';
  }
  interface CSpinBox {
    'hideLabel'?: boolean;
    'label'?: string;
    'max'?: number;
    'min'?: number;
    'step'?: number;
    'value'?: number;
  }
  interface CTab {
    'controls'?: string;
  }
  interface CTabList {
    'content'?: boolean;
    'disable'?: boolean;
    'hideDecoration'?: boolean;
    'name'?: string;
    'position'?: string;
    'show'?: boolean;
    'size'?: string;
  }
  interface CTabPanel {
    'tabId'?: string;
  }
  interface CTabs {
    'position'?: string;
  }
  interface CTooltip {
    'disable'?: boolean;
    'hideDecoration'?: boolean;
    'position'?: 'top' | 'bottom' | 'left' | 'right';
    'show'?: boolean;
    'size'?: 'sm' | 'md' | 'lg' | 'xl';
    'text'?: string;
  }
  interface CardBody {
    'cardSubtitle'?: string;
    'cardTitle'?: string;
  }
  interface CardFooter {}
  interface DropdownItem {
    'closeOnClick'?: boolean;
    'onCloseDropdown'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'c-accordion': CAccordion;
    'c-accordion-slide': CAccordionSlide;
    'c-alert': CAlert;
    'c-badge': CBadge;
    'c-breadcrumbs': CBreadcrumbs;
    'c-button': CButton;
    'c-card': CCard;
    'c-carousel': CCarousel;
    'c-carousel-slide': CCarouselSlide;
    'c-column': CColumn;
    'c-dropdown': CDropdown;
    'c-form-field': CFormField;
    'c-img': CImg;
    'c-loading': CLoading;
    'c-loading-overlay': CLoadingOverlay;
    'c-modal': CModal;
    'c-modal-footer': CModalFooter;
    'c-navbar': CNavbar;
    'c-navbar-group': CNavbarGroup;
    'c-navbar-item': CNavbarItem;
    'c-navbar-row': CNavbarRow;
    'c-overlay': COverlay;
    'c-progress-bar': CProgressBar;
    'c-row': CRow;
    'c-side-drawer': CSideDrawer;
    'c-spin-box': CSpinBox;
    'c-tab': CTab;
    'c-tab-list': CTabList;
    'c-tab-panel': CTabPanel;
    'c-tabs': CTabs;
    'c-tooltip': CTooltip;
    'card-body': CardBody;
    'card-footer': CardFooter;
    'dropdown-item': DropdownItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'c-accordion': LocalJSX.CAccordion & JSXBase.HTMLAttributes<HTMLCAccordionElement>;
      'c-accordion-slide': LocalJSX.CAccordionSlide & JSXBase.HTMLAttributes<HTMLCAccordionSlideElement>;
      'c-alert': LocalJSX.CAlert & JSXBase.HTMLAttributes<HTMLCAlertElement>;
      'c-badge': LocalJSX.CBadge & JSXBase.HTMLAttributes<HTMLCBadgeElement>;
      'c-breadcrumbs': LocalJSX.CBreadcrumbs & JSXBase.HTMLAttributes<HTMLCBreadcrumbsElement>;
      'c-button': LocalJSX.CButton & JSXBase.HTMLAttributes<HTMLCButtonElement>;
      'c-card': LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
      'c-carousel': LocalJSX.CCarousel & JSXBase.HTMLAttributes<HTMLCCarouselElement>;
      'c-carousel-slide': LocalJSX.CCarouselSlide & JSXBase.HTMLAttributes<HTMLCCarouselSlideElement>;
      'c-column': LocalJSX.CColumn & JSXBase.HTMLAttributes<HTMLCColumnElement>;
      'c-dropdown': LocalJSX.CDropdown & JSXBase.HTMLAttributes<HTMLCDropdownElement>;
      'c-form-field': LocalJSX.CFormField & JSXBase.HTMLAttributes<HTMLCFormFieldElement>;
      'c-img': LocalJSX.CImg & JSXBase.HTMLAttributes<HTMLCImgElement>;
      'c-loading': LocalJSX.CLoading & JSXBase.HTMLAttributes<HTMLCLoadingElement>;
      'c-loading-overlay': LocalJSX.CLoadingOverlay & JSXBase.HTMLAttributes<HTMLCLoadingOverlayElement>;
      'c-modal': LocalJSX.CModal & JSXBase.HTMLAttributes<HTMLCModalElement>;
      'c-modal-footer': LocalJSX.CModalFooter & JSXBase.HTMLAttributes<HTMLCModalFooterElement>;
      'c-navbar': LocalJSX.CNavbar & JSXBase.HTMLAttributes<HTMLCNavbarElement>;
      'c-navbar-group': LocalJSX.CNavbarGroup & JSXBase.HTMLAttributes<HTMLCNavbarGroupElement>;
      'c-navbar-item': LocalJSX.CNavbarItem & JSXBase.HTMLAttributes<HTMLCNavbarItemElement>;
      'c-navbar-row': LocalJSX.CNavbarRow & JSXBase.HTMLAttributes<HTMLCNavbarRowElement>;
      'c-overlay': LocalJSX.COverlay & JSXBase.HTMLAttributes<HTMLCOverlayElement>;
      'c-progress-bar': LocalJSX.CProgressBar & JSXBase.HTMLAttributes<HTMLCProgressBarElement>;
      'c-row': LocalJSX.CRow & JSXBase.HTMLAttributes<HTMLCRowElement>;
      'c-side-drawer': LocalJSX.CSideDrawer & JSXBase.HTMLAttributes<HTMLCSideDrawerElement>;
      'c-spin-box': LocalJSX.CSpinBox & JSXBase.HTMLAttributes<HTMLCSpinBoxElement>;
      'c-tab': LocalJSX.CTab & JSXBase.HTMLAttributes<HTMLCTabElement>;
      'c-tab-list': LocalJSX.CTabList & JSXBase.HTMLAttributes<HTMLCTabListElement>;
      'c-tab-panel': LocalJSX.CTabPanel & JSXBase.HTMLAttributes<HTMLCTabPanelElement>;
      'c-tabs': LocalJSX.CTabs & JSXBase.HTMLAttributes<HTMLCTabsElement>;
      'c-tooltip': LocalJSX.CTooltip & JSXBase.HTMLAttributes<HTMLCTooltipElement>;
      'card-body': LocalJSX.CardBody & JSXBase.HTMLAttributes<HTMLCardBodyElement>;
      'card-footer': LocalJSX.CardFooter & JSXBase.HTMLAttributes<HTMLCardFooterElement>;
      'dropdown-item': LocalJSX.DropdownItem & JSXBase.HTMLAttributes<HTMLDropdownItemElement>;
    }
  }
}


