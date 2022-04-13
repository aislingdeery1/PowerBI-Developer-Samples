// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes
export const scopes: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "5333f332-4da4-4517-a4c6-ab856fd02995";

// Id of the workspace where the report is hosted
export const workspaceId: string = "a0e1f423-37bc-4355-94f4-85463c75b543";

// Id of the report to be embedded
export const reportId: string = "50a4cca1-cad6-4372-8261-697e4b25fa8e";