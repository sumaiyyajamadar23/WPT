class EmployeeService{
    constructor(){
        this.earr=[{empid:1232,ename:"Sam",sal:98765},
        {empid:2190,ename:"Jam",sal:55555},
        {empid:1490,ename:"Pre",sal:44444}]
    }

    getEmployees(){
        return this.earr;
    }
    addEmp(emp){
        let pos=this.earr.findIndex(a=>a.empid===emp.empid);
        if(pos===-1){
           this.earr.push(emp);
        }
    }
}

export default new EmployeeService();