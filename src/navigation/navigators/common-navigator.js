import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigatorOptions as options} from '../navigation-action';
import {routes} from '../navigation-routes';

import Customer from '@/features/customers/containers/Customer';

// import Companies from '@/features/common/containers/Companies';
import {CreateCompany} from 'screens/companies';
import CompanyInfo from '@/features/settings/containers/Company';

import Expense from '@/features/expenses/containers/Expense';

import Payment from '@/features/payments/containers/Payment';

import Items from '@/features/more/containers/Items';
import Item from '@/features/more/containers/Item';

import Reports from '@/features/more/containers/Reports';
import Report from '@/features/more/containers/Report';

import Settings from '@/features/settings/containers/Settings';
import UpdateApp from '@/components/UpdateAppVersion';
import {Endpoint} from 'screens/endpoint';
import Account from '@/features/settings/containers/Account';
import Notification from '@/features/settings/containers/Notification';
import {Preferences} from 'screens/preferences';
import TouchOrFaceId from '@/features/settings/containers/Touch-Face-Id';
import {LostConnection} from '@/components';

import {Categories, CreateCategory} from 'screens/categories';

import Taxes from '@/features/settings/containers/Taxes';
import Tax from '@/features/settings/containers/Tax';

import CustomFields from '@/features/settings/containers/CustomFields';
import CustomField from '@/features/settings/containers/CustomField';

import Notes from '@/features/settings/containers/Notes';
import Note from '@/features/settings/containers/Note';

import {Users, CreateUser} from 'screens/users';
import {
  RecurringInvoices,
  ViewRecurringInvoice,
  CreateRecurringInvoice
} from 'screens/recurring-invoices';
import {Roles, CreateRole} from 'screens/roles';
import {ItemUnits} from 'screens/item-units';
import {CreateItem} from '@/components/Items/create-item';
import {
  CustomizeList,
  CustomizeInvoice,
  CustomizeEstimate,
  CustomizePayment
} from 'screens/customize';
import {CreateInvoice} from 'screens/invoices/create-invoice';
import {Estimates, CreateEstimate} from 'screens/estimates';

const Stack = createStackNavigator();

export const CommonNavigator = (
  <>
    {/* Customer Navigator */}
    <Stack.Screen
      name={routes.CUSTOMER}
      component={Customer}
      options={options}
    />

    {/* Company Navigator */}
    {/* <Stack.Screen
      name={routes.COMPANIES}
      component={Companies}
      options={options}
    /> */}
    <Stack.Screen
      name={routes.CREATE_COMPANY}
      component={CreateCompany}
      options={options}
    />
    <Stack.Screen
      name={routes.COMPANY_INFO}
      component={CompanyInfo}
      options={options}
    />

    {/* Estimate Navigator */}
    <Stack.Screen
      name={routes.ESTIMATES}
      component={Estimates}
      options={options}
    />
    <Stack.Screen
      name={routes.CREATE_ESTIMATE}
      component={CreateEstimate}
      options={options}
    />

    {/* Recurring Invoice Navigator */}
    <Stack.Screen
      name={routes.RECURRING_INVOICES}
      component={RecurringInvoices}
      options={options}
    />
    <Stack.Screen
      name={routes.VIEW_RECURRING_INVOICE}
      component={ViewRecurringInvoice}
      options={options}
    />
    <Stack.Screen
      name={routes.CREATE_RECURRING_INVOICE}
      component={CreateRecurringInvoice}
      options={options}
    />

    {/* Expense Navigator */}
    <Stack.Screen name={routes.EXPENSE} component={Expense} options={options} />

    {/* Invoice Navigator */}
    <Stack.Screen
      name={routes.CREATE_INVOICE}
      component={CreateInvoice}
      options={options}
    />

    {/* Payment Navigator */}
    <Stack.Screen name={routes.PAYMENT} component={Payment} options={options} />

    {/* Items Navigator */}
    <Stack.Screen
      name={routes.GLOBAL_ITEMS}
      component={Items}
      options={options}
    />
    <Stack.Screen
      name={routes.GLOBAL_ITEM}
      component={Item}
      options={options}
    />

    {/* Create Item Navigator */}
    <Stack.Screen
      name={routes.CREATE_ITEM}
      component={CreateItem}
      options={options}
    />

    {/* Reports Navigator */}
    <Stack.Screen name={routes.REPORTS} component={Reports} options={options} />
    <Stack.Screen
      name={routes.GENERATE_REPORT}
      component={Report}
      options={options}
    />

    {/* Users Navigator */}
    <Stack.Screen name={routes.USERS} component={Users} options={options} />
    <Stack.Screen
      name={routes.CREATE_USER}
      component={CreateUser}
      options={options}
    />

    {/* Settings Navigator */}
    <Stack.Screen
      name={routes.UPDATE_APP_VERSION}
      component={UpdateApp}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name={routes.LOST_CONNECTION}
      component={LostConnection}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name={routes.ENDPOINTS_SETTINGS}
      component={Endpoint}
      options={options}
    />
    <Stack.Screen
      name={routes.SETTING_LIST}
      component={Settings}
      options={options}
    />
    <Stack.Screen
      name={routes.NOTIFICATIONS}
      component={Notification}
      options={options}
    />
    <Stack.Screen
      name={routes.PREFERENCES}
      component={Preferences}
      options={options}
    />
    <Stack.Screen
      name={routes.TOUCH_OR_FACE_ID}
      component={TouchOrFaceId}
      options={options}
    />

    {/* Account Navigator */}
    <Stack.Screen
      name={routes.ACCOUNT_INFO}
      component={Account}
      options={options}
    />

    {/* Notes Navigator */}
    <Stack.Screen name={routes.NOTES} component={Notes} options={options} />
    <Stack.Screen name={routes.NOTE} component={Note} options={options} />

    {/* Taxes Navigator */}
    <Stack.Screen name={routes.TAXES} component={Taxes} options={options} />
    <Stack.Screen name={routes.TAX} component={Tax} options={options} />

    {/* Category Navigator */}
    <Stack.Screen
      name={routes.CATEGORIES}
      component={Categories}
      options={options}
    />
    <Stack.Screen
      name={routes.CREATE_CATEGORY}
      component={CreateCategory}
      options={options}
    />

    {/* Customize Navigator */}
    <Stack.Screen
      name={routes.CUSTOMIZE_LIST}
      component={CustomizeList}
      options={options}
    />
    <Stack.Screen
      name={routes.CUSTOMIZE_INVOICE}
      component={CustomizeInvoice}
      options={options}
    />
    <Stack.Screen
      name={routes.CUSTOMIZE_ESTIMATE}
      component={CustomizeEstimate}
      options={options}
    />
    <Stack.Screen
      name={routes.CUSTOMIZE_PAYMENT}
      component={CustomizePayment}
      options={options}
    />

    {/* Item Units Navigator */}
    <Stack.Screen
      name={routes.ITEM_UNITS}
      component={ItemUnits}
      options={options}
    />

    {/* Custom Fields Navigator */}
    <Stack.Screen
      name={routes.CUSTOM_FIELDS}
      component={CustomFields}
      options={options}
    />
    <Stack.Screen
      name={routes.CUSTOM_FIELD}
      component={CustomField}
      options={options}
    />

    {/* Roles Navigator */}
    <Stack.Screen name={routes.ROLES} component={Roles} options={options} />
    <Stack.Screen
      name={routes.CREATE_ROLE}
      component={CreateRole}
      options={options}
    />
  </>
);
