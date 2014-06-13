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


-- Remove Benefitting country and rows without money 
SELECT fiscalYear, fiscalYearType, account, agency, operatingUnit, category, sector, amount 
FROM Planned 
WHERE amount > 0


-- Export to csv via gui
