<cfscript>
    uploadDir = getDirectoryFromPath(getCurrentTemplatePath()) & 'upload'; 
    If (not DirectoryExists(uploadDir)) directoryCreate(uploadDir);
</cfscript>
<cffile action="upload" result="uploadRes" fileField="file" destination="#uploadDir#" nameConflict="MakeUnique">
<cfdump var="#uploadRes#">
<cfdump var="#form#">