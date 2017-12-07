@echo off
cls
SET var=%cd%
cd C:\Users\Administrator\Downloads
nuget restore %cd%\proxy\proxy.sln
