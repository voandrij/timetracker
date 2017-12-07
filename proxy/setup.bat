@echo off
cls
SET var=%cd%
cd C:\Users\Administrator\Downloads
nuget restore %cd%\proxy\proxy.sln

cd C:\Windows\Microsoft.NET\Framework\v4.0.30319\
msbuild %cd%\proxy\proxy.sln
