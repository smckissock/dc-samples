-- Import steps for MS SQL Server 


-- Source data
-- http://www.foreignassistance.gov/web/Documents/Full_ForeignAssistanceData.zip

-- Import Planned page via GUI 


-- json style column names
SP_RENAME 'Planned.[Fiscal Year]', 'fiscalYear', 'COLUMN'
GO
SP_RENAME 'Planned.[Fiscal Year Type]', 'fiscalYearType', 'COLUMN'
GO
SP_RENAME 'Planned.[Account Name]' , 'account', 'COLUMN'
GO
SP_RENAME 'Planned.[Agency Name]' , 'agency', 'COLUMN'
GO
SP_RENAME 'Planned.[Operating Unit]' , 'operatingUnit', 'COLUMN'
GO
SP_RENAME 'Planned.[Category]' , 'category', 'COLUMN'
GO
SP_RENAME 'Planned.[Sector]' , 'sector', 'COLUMN'
GO
SP_RENAME 'Planned.[Amount]' , 'amount', 'COLUMN'
GO


-- Remove Benefitting country, improve names, and remove rows without money
SELECT 
	fiscalYear, 
	fiscalYearType, 
	CASE 
		WHEN CHARINDEX('Base', fiscalYearType) > 0 THEN 'Base' 
		WHEN CHARINDEX('Supp', fiscalYearType) > 0 THEN 'Supplemental' 
		WHEN CHARINDEX('Request', fiscalYearType) > 0 THEN 'Request' 
		ELSE 'Unspecified'  
	END appropriationType,
	CASE WHEN account = 'NULL' THEN 'Unspecified' ELSE account END account, 
	CASE 
		WHEN agency = 'USDA' THEN 'Deptartment of Agriculture' 
		WHEN agency = 'IAF' THEN 'Inter-American Foundation' 
		WHEN agency = 'DoD' THEN 'Department of Defense' 
		WHEN agency = 'MCC' THEN 'Millennium Challenge Corporation' 
		WHEN agency = 'Treasury' THEN 'Deptartment of Treasury' 
		WHEN agency = 'DOS and USAID' THEN 'USAID and Department of State' 
		WHEN agency = 'USADF' THEN 'US African Development Foundation' 
		WHEN agency = 'Peace Corps' THEN 'Peace Corps'
		ELSE 'Unspecified'  
	END agency,
	operatingUnit, 
	ISNULL(category, 'Unspecified') category, 
	ISNULL(sector, 'Unspecified') sector,  
	amount 
FROM Planned 
WHERE (amount <> 0)


-- Export to csv via gui



