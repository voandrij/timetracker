@echo off
cls
C:\Users\Administrator\Downloads\nuget restore proxy.sln

"C:\Windows\Microsoft.NET\Framework64\v2.0.50727\MSBuild.exe" proxy.sln
