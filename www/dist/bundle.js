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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWY0NDc5ODRlZmRhZTlhOTkwOTkiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7S0FDSTtTQUNJLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDdEcsSUFBTSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDakYsRUFBRSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO2FBQ3pCLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN6RixDQUFDO0tBQ0wsQ0FBQztLQUVELGtEQUE2QixHQUE3QjtTQUNJLElBQUksV0FBVyxHQUFHLENBQUMsZUFBZSxFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN6NUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGNBQWM7YUFDL0IsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ3RCLGFBQWEsRUFBRSxjQUFjO2NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2lCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQzthQUNsRCxDQUFDLEVBQUUsVUFBQyxLQUFLO2lCQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQixDQUFDLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQyxDQUFDO0tBQ1AsQ0FBQztLQUVELDZDQUF3QixHQUF4QjtTQUNJLElBQU0sVUFBVSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQztTQUNuRixJQUFJLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzRixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxRQUFRO2FBQ3JDLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87aUJBQ3JCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7aUJBQ2pDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztpQkFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QixDQUFDLENBQUMsQ0FBQztTQUNQLENBQUMsRUFBRSxVQUFDLEtBQUs7YUFDTCxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakIsQ0FBQyxFQUFFO2FBQ0ssTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSTthQUNsQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7VUFDNUQsQ0FBQyxDQUFDO1NBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNqQixDQUFDO0tBQ0wsaUJBQUM7QUFBRCxFQUFDO0FBekNZLGlDQUFVO0FBMkN2QixLQUFJLFFBQVEsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6Ii4vd3d3L2Rpc3QvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWY0NDc5ODRlZmRhZTlhOTkwOTkiLCJleHBvcnQgY2xhc3MgQ29yZG92YUFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kQ29udGFjdEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbmZpbmRDb250YWN0QnV0dG9uQ2xpY2spO1xuICAgICAgICBjb25zdCBwb3B1bGF0ZUNvbnRhY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVsYXRlQ29udGFjdHNCdXR0b24nKTtcbiAgICAgICAgaWYgKHBvcHVsYXRlQ29udGFjdHNCdXR0b24pIHtcbiAgICAgICAgICAgIHBvcHVsYXRlQ29udGFjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9ucG9wdWxhdGVDb250YWN0c0J1dHRvbkNsaWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9ucG9wdWxhdGVDb250YWN0c0J1dHRvbkNsaWNrKCkge1xuICAgICAgICB2YXIgbmV3Q29udGFjdHMgPSBbJ1RlcmVzaXRhIEx1c2UnLCAnQXVndXN0aW5lIFJheW5lcicsICdTaG9uZHJhIEJyb2NraW5ndG9uJywgJ0tyeXN0ZW4gRHJvemQnLCAnQW5kcmV3IEZlbHRuZXInLCAnQ2hhcmxvdHRlIFdpbmRoYW0nLCAnRGFuaWthIEdhcnRuZXInLCAnU3VrIEJsb3VpbicsICdKZXJlbWlhaCBBbGJlcnRpJywgJ0tpcmsgQ3VmZmVlJywgJ1Jvc2VsaW5lIExpcHRvbicsICdadWxlbWEgTHVlY2h0ZWZlbGQnLCAnQWltZWUgSG9sZ3VpbicsICdUcmVlbmEgRG9uZScsICdDaW50aGlhIFdvb3N0ZXInLCAnQ2VvbGEgVmVhc2xleScsICdQYXR0eSBLZW5uaXNvbicsICdCYXNpbGlhIFBlbm55d2VsbCcsICdJc2VsYSBDYXJibycsICdNZWx2aW5hIFVyaWNrJywgJ0xvdXJpZSBEdXNlbmJlcnJ5JywgJ0RhbmllbGxhIEZvcm5lc3MnLCAnVGhlcnNhIFRldmlzJywgJ01hcmNlbG8gV2hpcGtleScsICdLaWVzaGEgVmlsbGFudmV2YScsICdEZW5pc3NlIFN0b3JjaycsICdZb2xhbmRhIEh1cmxleScsICdCZW5qYW1pbiBXaW5lcicsICdFbWVyaXRhIEdlbmRyZWF1JywgJ01hcmNoZWxsZSBIZXluZScsICdGcmFuY2lzIFdlaHJsZScsICdCcml0dCBTd2luZm9yZCcsICdJc2lkcm8gR2FybmVyJywgJ1NhbnRvcyBQZXJlYScsICdFdW4gRnJpZWRtYW4nLCAnTGliYmllIEdvb2Rsb2UnLCAnQWx5c3NhIFBvcnRtYW4nLCAnTmVvbWkgQW1lcmluZScsICdBbmRyZWUgTWFuZGVyc2NoZWlkJywgJ0Nhcm1lbGEgR2FpdGFuJywgJ1dpbGxldHRhIEhpeG9uJywgJ0xpc2UgQmF0aCcsICdGbG9yZXR0YSBDYXJsc2VuJywgJ1lpbmcgS2llbHknLCAnV2F5bmUgQ29pdCcsICdCaXJnaXQgTWNrZWVsJywgJ0VsaXpiZXRoIE1vaGxlcicsICdBcm1hbmRhIENhd2xleScsICdUcmluYSBNZXN6YXJvcycsICdDYXJtZW4gTWFycmluZXInXTtcbiAgICAgICAgbmV3Q29udGFjdHMuZm9yRWFjaCgobmV3Q29udGFjdE5hbWUpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5jb250YWN0cy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICdkaXNwbGF5TmFtZSc6IG5ld0NvbnRhY3ROYW1lXG4gICAgICAgICAgICB9KS5zYXZlKChjb250YWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udGFjdC5kaXNwbGF5TmFtZSArICcgY3JlYXRlZCcpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uZmluZENvbnRhY3RCdXR0b25DbGljaygpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoVGV4dCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGZpZWxkcyA9IFtuYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLmRpc3BsYXlOYW1lLCBuYXZpZ2F0b3IuY29udGFjdHMuZmllbGRUeXBlLm5hbWVdO1xuICAgICAgICBuYXZpZ2F0b3IuY29udGFjdHMuZmluZChmaWVsZHMsIChjb250YWN0cykgPT4ge1xuICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RzJyk7XG4gICAgICAgICAgICBjb250YWN0cy5mb3JFYWNoKChjb250YWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSAnY29sbGVjdGlvbi1pdGVtJztcbiAgICAgICAgICAgICAgICBsaS5pbm5lclRleHQgPSBjb250YWN0LmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGZpbHRlcjogc2VhcmNoVGV4dCwgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZGVzaXJlZEZpZWxkczogW25hdmlnYXRvci5jb250YWN0cy5maWVsZFR5cGUuZGlzcGxheU5hbWVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXG4gICAgfVxufVxuXG5sZXQgaW5zdGFuY2UgPSBuZXcgQ29yZG92YUFwcCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3d3dy9qcy9pbmRleC50cyJdLCJzb3VyY2VSb290IjoiIn0=