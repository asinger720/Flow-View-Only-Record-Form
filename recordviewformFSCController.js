({
	doInit : function(component, event, helper) {
		let fields = component.get('v.fields');
       

        
        
           		let fieldsArr = fields.split(',');
                console.log(fields);
            	component.set('v.fieldListArr', fieldsArr);

	
    }
})
