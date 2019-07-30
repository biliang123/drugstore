package com.wzw.entity;

import com.alibaba.fastjson.annotation.JSONField;

import java.util.Date;

public class Store {
    private Integer medicineId;
    /**
     * 药品编号（master）
     */
    private Integer medicineMenuNumber;
    /**
     * 药品名称（master）
     */
    private String medicineMenuName;
    /**
     * 药品最下库存（master）
     */
    private Integer storeMin;
    /**
     * 药品最大库存(master)
     */
    private Integer storeMax;
    /**
     * 药品数量（master）
     */
    private Integer amount;
    /**
     * 剩余过期日期（master）
     */
    private Integer deadline;
    @JSONField(format = "yyyy-MM-dd")
    private Date productionDate;


    public Store() {
    }

    public Store(Integer medicineId, Integer medicineMenuNumber, String medicineMenuName, Integer storeMin, Integer storeMax, Integer amount, Integer deadline, Date productionDate) {
        this.medicineId = medicineId;
        this.medicineMenuNumber = medicineMenuNumber;
        this.medicineMenuName = medicineMenuName;
        this.storeMin = storeMin;
        this.storeMax = storeMax;
        this.amount = amount;
        this.deadline = deadline;
        this.productionDate = productionDate;
    }

    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public Integer getMedicineMenuNumber() {
        return medicineMenuNumber;
    }

    public void setMedicineMenuNumber(Integer medicineMenuNumber) {
        this.medicineMenuNumber = medicineMenuNumber;
    }

    public String getMedicineMenuName() {
        return medicineMenuName;
    }

    public void setMedicineMenuName(String medicineMenuName) {
        this.medicineMenuName = medicineMenuName == null ? null : medicineMenuName.trim();
    }

    public Integer getStoreMin() {
        return storeMin;
    }

    public void setStoreMin(Integer storeMin) {
        this.storeMin = storeMin ;
    }

    public Integer getStoreMax() {
        return storeMax;
    }

    public void setStoreMax(Integer storeMax) {
        this.storeMax = storeMax;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Integer getDeadline() {
        return deadline;
    }

    public void setDeadline(Integer deadline) {
        this.deadline = deadline;
    }

    public Date getProductionDate() {
        return productionDate;
    }

    public void setProductionDate(Date productionDate) {
        this.productionDate = productionDate;
    }

    @Override
    public String toString() {
        return "Store{" +
                "medicineId=" + medicineId +
                ", medicineMenuNumber=" + medicineMenuNumber +
                ", medicineMenuName='" + medicineMenuName + '\'' +
                ", storeMin=" + storeMin +
                ", storeMax=" + storeMax +
                ", amount=" + amount +
                ", deadline=" + deadline +
                ", productionDate=" + productionDate +
                '}';
    }
}