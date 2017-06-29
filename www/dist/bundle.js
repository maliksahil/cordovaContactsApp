/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var CordovaApp = (function () {
	    function CordovaApp() {
	        document.getElementById('findContactButton').addEventListener('click', this.onfindContactButtonClick);
	        var populateContactsButton = document.getElementById('populateContactsButton');
	        if (populateContactsButton) {
	            populateContactsButton.addEventListener('click', this.onpopulateContactsButtonClick);
	        }
	    }
	    CordovaApp.prototype.onpopulateContactsButtonClick = function () {
	        var newContacts = ['Teresita Luse', 'Augustine Rayner', 'Shondra Brockington', 'Krysten Drozd', 'Andrew Feltner', 'Charlotte Windham', 'Danika Gartner', 'Suk Blouin', 'Jeremiah Alberti', 'Kirk Cuffee', 'Roseline Lipton', 'Zulema Luechtefeld', 'Aimee Holguin', 'Treena Done', 'Cinthia Wooster', 'Ceola Veasley', 'Patty Kennison', 'Basilia Pennywell', 'Isela Carbo', 'Melvina Urick', 'Lourie Dusenberry', 'Daniella Forness', 'Thersa Tevis', 'Marcelo Whipkey', 'Kiesha Villanveva', 'Denisse Storck', 'Yolanda Hurley', 'Benjamin Winer', 'Emerita Gendreau', 'Marchelle Heyne', 'Francis Wehrle', 'Britt Swinford', 'Isidro Garner', 'Santos Perea', 'Eun Friedman', 'Libbie Goodloe', 'Alyssa Portman', 'Neomi Amerine', 'Andree Manderscheid', 'Carmela Gaitan', 'Willetta Hixon', 'Lise Bath', 'Floretta Carlsen', 'Ying Kiely', 'Wayne Coit', 'Birgit Mckeel', 'Elizbeth Mohler', 'Armanda Cawley', 'Trina Meszaros', 'Carmen Marriner'];
	        newContacts.forEach(function (newContactName) {
	            navigator.contacts.create({
	                'displayName': newContactName
	            }).save(function (contact) {
	                console.log(contact.displayName + ' created');
	            }, function (error) {
	                alert(error);
	            });
	        });
	    };
	    CordovaApp.prototype.onfindContactButtonClick = function () {
	        var searchText = document.getElementById('searchText').value;
	        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
	        navigator.contacts.find(fields, function (contacts) {
	            var ul = document.getElementById('contacts');
	            contacts.forEach(function (contact) {
	                var li = document.createElement('li');
	                li.className = 'collection-item';
	                li.innerText = contact.displayName;
	                ul.appendChild(li);
	            });
	        }, function (error) {
	            alert(error);
	        }, {
	            filter: searchText, multiple: true,
	            desiredFields: [navigator.contacts.fieldType.displayName]
	        });
	        return false;
	    };
	    return CordovaApp;
	}());
	exports.CordovaApp = CordovaApp;
	var instance = new CordovaApp();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWY0NDc5ODRlZmRhZTlhOTkwOTkiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7S0FDSTtTQUNJLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDdEcsSUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDakYsRUFBRSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO2FBQ3pCLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN6RixDQUFDO0tBQ0wsQ0FBQztLQUVELGtEQUE2QixHQUE3QjtTQUNJLElBQUksV0FBVyxHQUFHLENBQUMsZUFBZSxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN6NUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGNBQWM7YUFDL0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCLGFBQWEsRUFBRSxjQUFjO2NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2lCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQzthQUNsRCxDQUFDLEVBQUUsVUFBQyxLQUFLO2lCQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQixDQUFDLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQztLQUVELDZDQUF3QixHQUF4QjtTQUNJLElBQU0sVUFBVSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQztTQUNuRixJQUFJLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxRQUFRO2FBQ3JDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87aUJBQ3JCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7aUJBQ2pDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztpQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QixDQUFDLENBQUMsQ0FBQztTQUNQLENBQUMsRUFBRSxVQUFDLEtBQUs7YUFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakIsQ0FBQyxFQUFFO2FBQ0ssTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSTthQUNsQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7VUFDNUQsQ0FBQyxDQUFDO1NBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNqQixDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBekNZLGlDQUFVO0FBMkN2QixLQUFJLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6Ii4vd3d3L2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWY0NDc5ODRlZmRhZTlhOTkwOTkiLCJleHBvcnQgY2xhc3MgQ29yZG92YUFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZENvbnRhY3RCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25maW5kQ29udGFjdEJ1dHRvbkNsaWNrKTtcclxuICAgICAgICBjb25zdCBwb3B1bGF0ZUNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVsYXRlQ29udGFjdHNCdXR0b24nKTtcclxuICAgICAgICBpZiAocG9wdWxhdGVDb250YWN0c0J1dHRvbikge1xyXG4gICAgICAgICAgICBwb3B1bGF0ZUNvbnRhY3RzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbnBvcHVsYXRlQ29udGFjdHNCdXR0b25DbGljayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9ucG9wdWxhdGVDb250YWN0c0J1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIHZhciBuZXdDb250YWN0cyA9IFsnVGVyZXNpdGEgTHVzZScsICdBdWd1c3RpbmUgUmF5bmVyJywgJ1Nob25kcmEgQnJvY2tpbmd0b24nLCAnS3J5c3RlbiBEcm96ZCcsICdBbmRyZXcgRmVsdG5lcicsICdDaGFybG90dGUgV2luZGhhbScsICdEYW5pa2EgR2FydG5lcicsICdTdWsgQmxvdWluJywgJ0plcmVtaWFoIEFsYmVydGknLCAnS2lyayBDdWZmZWUnLCAnUm9zZWxpbmUgTGlwdG9uJywgJ1p1bGVtYSBMdWVjaHRlZmVsZCcsICdBaW1lZSBIb2xndWluJywgJ1RyZWVuYSBEb25lJywgJ0NpbnRoaWEgV29vc3RlcicsICdDZW9sYSBWZWFzbGV5JywgJ1BhdHR5IEtlbm5pc29uJywgJ0Jhc2lsaWEgUGVubnl3ZWxsJywgJ0lzZWxhIENhcmJvJywgJ01lbHZpbmEgVXJpY2snLCAnTG91cmllIER1c2VuYmVycnknLCAnRGFuaWVsbGEgRm9ybmVzcycsICdUaGVyc2EgVGV2aXMnLCAnTWFyY2VsbyBXaGlwa2V5JywgJ0tpZXNoYSBWaWxsYW52ZXZhJywgJ0Rlbmlzc2UgU3RvcmNrJywgJ1lvbGFuZGEgSHVybGV5JywgJ0JlbmphbWluIFdpbmVyJywgJ0VtZXJpdGEgR2VuZHJlYXUnLCAnTWFyY2hlbGxlIEhleW5lJywgJ0ZyYW5jaXMgV2VocmxlJywgJ0JyaXR0IFN3aW5mb3JkJywgJ0lzaWRybyBHYXJuZXInLCAnU2FudG9zIFBlcmVhJywgJ0V1biBGcmllZG1hbicsICdMaWJiaWUgR29vZGxvZScsICdBbHlzc2EgUG9ydG1hbicsICdOZW9taSBBbWVyaW5lJywgJ0FuZHJlZSBNYW5kZXJzY2hlaWQnLCAnQ2FybWVsYSBHYWl0YW4nLCAnV2lsbGV0dGEgSGl4b24nLCAnTGlzZSBCYXRoJywgJ0Zsb3JldHRhIENhcmxzZW4nLCAnWWluZyBLaWVseScsICdXYXluZSBDb2l0JywgJ0JpcmdpdCBNY2tlZWwnLCAnRWxpemJldGggTW9obGVyJywgJ0FybWFuZGEgQ2F3bGV5JywgJ1RyaW5hIE1lc3phcm9zJywgJ0Nhcm1lbiBNYXJyaW5lciddO1xyXG4gICAgICAgIG5ld0NvbnRhY3RzLmZvckVhY2goKG5ld0NvbnRhY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jb250YWN0cy5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgJ2Rpc3BsYXlOYW1lJzogbmV3Q29udGFjdE5hbWVcclxuICAgICAgICAgICAgfSkuc2F2ZSgoY29udGFjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGFjdC5kaXNwbGF5TmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25maW5kQ29udGFjdEJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaFRleHQnKSkudmFsdWU7XHJcbiAgICAgICAgbGV0IGZpZWxkcyA9IFtuYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLmRpc3BsYXlOYW1lLCBuYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLm5hbWVdO1xyXG4gICAgICAgIG5hdmlnYXRvci5jb250YWN0cy5maW5kKGZpZWxkcywgKGNvbnRhY3RzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0cycpO1xyXG4gICAgICAgICAgICBjb250YWN0cy5mb3JFYWNoKChjb250YWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2NvbGxlY3Rpb24taXRlbSc7XHJcbiAgICAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBjb250YWN0LmRpc3BsYXlOYW1lO1xyXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogc2VhcmNoVGV4dCwgbXVsdGlwbGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXNpcmVkRmllbGRzOiBbbmF2aWdhdG9yLmNvbnRhY3RzLmZpZWxkVHlwZS5kaXNwbGF5TmFtZV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBpbnN0YW5jZSA9IG5ldyBDb3Jkb3ZhQXBwKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==