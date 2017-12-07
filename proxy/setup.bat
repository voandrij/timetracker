@echo off
cls
C:\Users\Administrator\Downloads\nuget restore proxy.sln

"C:\Windows\Microsoft.NET\Framework64\v3.5\MSBuild.exe" proxy.sln
