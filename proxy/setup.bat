@echo off
cls
SET var=%cd%
cd C:\Users\Administrator\Downloads
nuget restore %cd%\proxy\proxy.sln

cd C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools
msbuild %cd%\proxy\proxy.sln
