var dom = (function () {
    var self,
        domObject;

    function getById(id){
        validator.validateIfString(id, 'Id');
        domObject = document.getElementById(id);

        return domObject;
    }

    function querySelect(query){
        validator.validateIfString(query, 'QuerySelector');
        domObject = document.querySelector(query);

        return domObject;
    }

    function querySelectAll(query){
        validator.validateIfString(query, 'QuerySelector');
        domObject = document.querySelectorAll(query);

        return domObject;
    }

    function getFirstChild(){
        return domObject.firstElementChild;
    }

    self = {
        getById : getById,
        querySelect : querySelect,
        querySelectAll : querySelectAll,
        getFirstChild : getFirstChild
    };

    return self;
}());

