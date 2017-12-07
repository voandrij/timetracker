@echo off
cls
C:\Users\Administrator\Downloads\nuget restore proxy.sln

"C:\Windows\Microsoft.NET\Framework64\v4.0.30319\MSBuild.exe" proxy.sln
