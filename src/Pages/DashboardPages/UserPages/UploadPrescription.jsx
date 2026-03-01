import { useState } from "react";
import { Upload, FileText, Download, Trash2, Image, Eye } from "lucide-react";
import { Button } from "../../../components/ui/button";
import toast from "react-hot-toast";

export default function UploadPrescription() {
    const [previewFile, setPreviewFile] = useState(null);
    const [prescriptions, setPrescriptions] = useState([
        {
            id: 1,
            name: "Dr. Smith Prescription",
            date: "2024-02-10",
            size: "2.4 MB",
        },
        { id: 2, name: "Lab Test Report", date: "2024-02-05", size: "1.8 MB" },
    ]);

    const handleFileUpload = (e) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                const newPrescription = {
                    id: Date.now(),
                    name: file.name,
                    date: new Date().toISOString().split("T")[0],
                    size: (file.size / 1024 / 1024).toFixed(1) + " MB",
                    fileUrl: URL.createObjectURL(file), // 👈 important
                    fileType: file.type,
                    status: "Processing",
                };
                setPrescriptions([newPrescription, ...prescriptions]);
                toast.success(`${file.name} uploaded successfully!`);
            });
        }
    };

    const handleDelete = (id) => {
        setPrescriptions(prescriptions.filter((p) => p.id !== id));
        toast.success("Prescription deleted");
    };
    const handlePreview = (prescription) => {
        setPreviewFile(prescription);
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    Upload Prescription
                </h2>
                <p className="text-muted-foreground">
                    Store and manage your prescriptions and medical reports
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upload Area */}
                <div className="lg:col-span-1">
                    <div className="bg-card border border-border rounded-lg p-6">
                        <label className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-dashed border-primary rounded-lg hover:bg-muted cursor-pointer transition-colors">
                            <Upload size={40} className="text-primary" />
                            <div className="text-center">
                                <p className="font-semibold text-foreground">
                                    Upload Prescription
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    JPG, PNG, PDF up to 10MB
                                </p>
                            </div>
                            <input
                                type="file"
                                multiple
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                        </label>
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-xs text-blue-900 dark:text-blue-100">
                                All files are automatically backed up to
                                Cloudinary and encrypted for security.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Prescriptions List */}
                <div className="lg:col-span-2">
                    <div className="bg-card border border-border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Image size={20} className="text-primary" />
                            Your Prescriptions
                        </h3>
                        <div className="space-y-2">
                            {prescriptions.map((prescription) => (
                                <div
                                    key={prescription.id}
                                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors"
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <Image
                                            size={24}
                                            className="text-primary"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-foreground truncate">
                                                {prescription.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {prescription.date} •{" "}
                                                {prescription.size}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* <span className={`px-2 py-1 text-xs font-medium rounded-full ${prescription.status === 'Verified' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                      prescription.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                        'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                      {prescription.status}
                    </span> */}
                                        <button
                                            onClick={() =>
                                                toast.success("Downloading...")
                                            }
                                            className="p-2 hover:bg-primary/10 rounded transition-colors"
                                        >
                                            <Download
                                                size={18}
                                                className="text-primary"
                                            />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(prescription.id)
                                            }
                                            className="p-2 hover:bg-destructive/10 rounded transition-colors"
                                        >
                                            <Trash2
                                                size={18}
                                                className="text-destructive"
                                            />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handlePreview(prescription)
                                            }
                                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md 
               bg-primary/10 text-primary hover:bg-primary/20 
               transition-colors"
                                        >
                                            <Eye size={18} />
                                            Preview
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Preview Modal */}
            {previewFile && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-card w-[90%] max-w-3xl rounded-lg p-6 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setPreviewFile(null)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                        >
                            ✕
                        </button>

                        <h3 className="text-lg font-semibold mb-4">
                            {previewFile.name}
                        </h3>

                        <div className="max-h-[70vh] overflow-auto border rounded-md">
                            {previewFile.fileType?.includes("image") ? (
                                <img
                                    src={previewFile.fileUrl}
                                    alt="Preview"
                                    className="w-full object-contain"
                                />
                            ) : previewFile.fileType === "application/pdf" ? (
                                <iframe
                                    src={previewFile.fileUrl}
                                    title="PDF Preview"
                                    className="w-full h-[70vh]"
                                />
                            ) : (
                                <p className="p-4 text-center">
                                    Preview not available for this file type.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
