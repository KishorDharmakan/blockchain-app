import React, { Component } from 'react'
import Pagination from '../common/Pagination';
import { Link } from 'react-router-dom';
import './common.css';

var totalNoOfPages=0;
var arrayOfArrays=[];
var columnHeaders=null;
var pageTableData = [];
var currentPage=1;

export default class Table extends Component {

  constructor(props){
    super(props);
    console.log('inside construcor of Table this.props:', this.props);    
    this.state={
      pageTableDataState:[],
      //currentPage:1
    }
    this.getPageData= this.getPageData.bind(this);
  }

  getColumnNames = (rowVal) => {
    let colNames=[];
    for(var key in rowVal){
      console.log(key); // here is your column name you are looking for
      colNames.push(key);
    }
    return colNames;
  }


  getPageData(tableData, pageNum, itemsPerPage){

    
    console.log('pageNum:', pageNum); 
    console.log(' arrayOfArrays[pageNum-1]:',  arrayOfArrays[pageNum-1]); 
   // var arrayOfArrays = [];

    // if (tableData!== undefined && tableData.length !== undefined){
    //   tableData.forEach((item)=>{
    //     if(!arrayOfArrays.length || arrayOfArrays[arrayOfArrays.length-1].length === itemsPerPage)
    //       arrayOfArrays.push([]);
    
    //       arrayOfArrays[arrayOfArrays.length-1].push(item);
    //     });
    // }
    

    // console.log('arrayOfArrays:', arrayOfArrays);
    // console.log('arrayOfArrays.length:', arrayOfArrays.length);
    // totalNoOfPages =  arrayOfArrays.length;
    //return arrayOfArrays[pageNum-1]; // 0 is first index
    pageTableData=arrayOfArrays[pageNum-1];
    currentPage=pageNum;
    this.setState({
      pageTableDataState:arrayOfArrays[pageNum-1],
     // currentPage:pageNum      
      })
  }

  formArrayOfArraysForPageSplit(){
    console.log('inside formArrayOfArraysForPageSplit of Table this.props:', this.props);
    const colNames=this.getColumnNames(this.props.tableData[0]);
    //console.log('colNames:', colNames);
    const { tableData } = this.props;
   // console.log('tableData:', tableData);
    //console.log('tableData.length:', tableData.length);
    const colWidthPercentage=this.props.colWidthPercentage;
    let intForColWidth=-1;
    columnHeaders=colNames.map((colName) => 
                    {
                        intForColWidth++;
                        const styleObj={
                          width: colWidthPercentage[intForColWidth]+"%"
                        };
                        console.log('styleObj:', styleObj);
                        return <th key={colName} scope="col" style={styleObj}>{colName.toUpperCase()}</th>
                    }
                  )
    //console.log('columnHeaders:', columnHeaders);
  
    /** Sample code to split arrays based on pagesize
     * function getPageData(tableData, pageNum){
        console.log('tableData:', pageNum); 
        
        var bulkArray = [];

        tableData.forEach((item)=>{
        if(!bulkArray.length || bulkArray[bulkArray.length-1].length == 2)
        bulkArray.push([]);

        bulkArray[bulkArray.length-1].push(item);
        });

        console.log('bulkArray:', bulkArray);
        return bulkArray[pageNum-1]; // 0 is first index
      }

      const tableData=[{a:'3'},{b:'2'},{c:'6'},{d:'7'},{e:'8'},{f:'9'},{g:'10'}];
      const displayArray=getPageData(tableData, 2);
      console.log('displayArray:', displayArray);
     * 
     */
    arrayOfArrays = [];
    pageTableData = [];
    if (tableData.length !== undefined){
      tableData.forEach((item)=>{
        if(!arrayOfArrays.length || arrayOfArrays[arrayOfArrays.length-1].length === 10)
          arrayOfArrays.push([]);
    
          arrayOfArrays[arrayOfArrays.length-1].push(item);
        });
    }
    

    console.log('arrayOfArrays:', arrayOfArrays);
    console.log('arrayOfArrays.length:', arrayOfArrays.length);
    totalNoOfPages =  arrayOfArrays.length;
    //return arrayOfArrays[pageNum-1]; // 0 is first index
    console.log('currentPage:', currentPage);
    currentPage = currentPage <= totalNoOfPages ? currentPage  : 1;
    pageTableData=arrayOfArrays[currentPage-1];
    // this.setState({
    //   pageTableData:arrayOfArrays[0]
    // })
  }

  componentDidMount(){
    console.log('inside componentDidMount of Table');
  }

  render() {
    console.log('inside render Table this.props:', this.props);
    
    this.formArrayOfArraysForPageSplit();
    //const pageTableData= this.getPageData(tableData, 1, 10);
    //console.log('pageTableData:', pageTableData);
    /** Sample code to fetch values from JSON object
     * const JSONVal={ndbno: "09427", name: "Abiyuch, raw", measure: "0.5 cup", weight: 114};
    console.log('JSONVal:', JSONVal);
    console.log('JSONVal:', Object.keys(JSONVal).length);
    for (i = 0; i < Object.keys(JSONVal).length; i++) {
  console.log('i:',i);
  console.log('Object.keys:', Object.keys(JSONVal)[i]);
  const col=Object.keys(JSONVal)[i];
  console.log('col:', col);
  console.log('JSONVal:', JSONVal[col]);
}
     */
    let slNoCounter=0;
    const styleObjSlNo={
      width: "7%"
    };
    const styleObjViewBlock={
      width: "15%"
    };
    return (
      <div className="table-custom table-responsive">
        <Pagination getPageData={this.getPageData} totalNoOfPages={totalNoOfPages} currentPage={currentPage}/>
        <table className="table">
          <thead>
            <tr>
             <th scope="col" style ={styleObjSlNo}>Sl No:</th> 
             {columnHeaders}
             <th scope="col" style ={styleObjViewBlock}>View Block</th> 
            </tr>            
          </thead>
          <tbody>
              {pageTableData !== undefined && pageTableData.length !== undefined
              ? pageTableData.map((rowData)=>{
                //console.log('rowData:', rowData);
                //console.log('rowData.length:', Object.keys(rowData).length);
                let rowDataArray=[];
                slNoCounter++;
                let linkColumn=null;
                for (let i = 0; i < Object.keys(rowData).length; i++) {
                  //console.log('i:',i);
                  //console.log('Object.keys:', Object.keys(rowData)[i]);
                  const col=Object.keys(rowData)[i];
                  //console.log('col:', col);
                  //console.log('rowData:', rowData[col]);
                  rowDataArray.push(rowData[col])
                }
                linkColumn=<Link to={`/block/${rowData["height"]}`} > View Block </Link>;
                
                return <tr key={slNoCounter}><td>{slNoCounter}</td>{rowDataArray.map((rowVal) => (<td key={rowVal}>{rowVal}</td>) )}<td>{linkColumn}</td></tr>;
              })
              : null}
        
          </tbody>
        </table>
        <Pagination getPageData={this.getPageData} totalNoOfPages={totalNoOfPages} currentPage={currentPage}/>
      </div>
    )
  }
}
